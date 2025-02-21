// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "../dashboard/constants/dashboard"
// import LoginComponent from "../features/pages/auth/login/component.js";
// import RegisterComponent from "../features/pages/auth/register/component.js";
// import ForgotPasswordComponent from "../features/pages/auth/forgot/component.js";
// import ResetPasswordComponent from "../features/pages/auth/reset/component.js";
// import NotFoundComponent from "../features/shared/component/NotFoundComponent.js";


// // Initialize React app with React Router for page navigation
// const CombineRoute = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Homecomponent />} />
//         <Route element={<ProtectedRoute isAdminRoute={true} />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Route>
//         <Route path="/login" element={<LoginComponent />} />
//         <Route path="/register" element={<RegisterComponent />} />
//         <Route path="/forgot-password" element={<ForgotPasswordComponent />} />
//         <Route path="/reset_password/:id/:token" element={<ResetPasswordComponent />} />
//         <Route path="*" element={<NotFoundComponent />} />
//       </Routes>
//     </Router>
//   );
// }

// export default CombineRoute;