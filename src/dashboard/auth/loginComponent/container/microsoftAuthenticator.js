import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import LoginAuthenticator from '../component/microsoftLogin';
import { microsoftLoginUser } from '../reducerFunction/microsoftReducerFunction';

const mapStateToProps = state => ({
    Loading: state.microsoftLoginReducer.isLoading,
    users: state.microsoftLoginReducer.user,
    isAuthenticated: state.microsoftLoginReducer.isAuthenticated,
    error: state.microsoftLoginReducer.error, 
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        microsoftLoginUser, 
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginAuthenticator);