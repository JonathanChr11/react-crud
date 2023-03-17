import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import About from "./pages/About";
import Profile from "./pages/Profile";
import QuestionEditForm from "./pages/QuestionEditForm";
import PortofolioEdit from "./pages/PortofolioEdit";
import QuestionListPage from "./pages/QuestionListPage";
import CreateQuestion from "./pages/CreateQuestion";
import DeleteQuestion from "./pages/DeleteQuestion";
import "./styles/main.scss";

const App = () => (
  <Layout>
    <Routes>
      <Route path="/react-crud" element={<QuestionListPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/question/:id/edit" element={<QuestionEditForm />} />
      <Route path="/about/:id/edit" element={<PortofolioEdit />} />
      <Route path="/question/create" element={<CreateQuestion />} />
      <Route path="/question/:id/delete" element={<DeleteQuestion />} />
    </Routes>
  </Layout>
);

export default App;
