import {  Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import BookList from "./pages/BookList";
import BookDetails from "./pages/BookDetails";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/books"
          element={
            <ProtectedRoute>
              <BookList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/books/:id"
          element={
            <ProtectedRoute>
              <BookDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    
  );
}

export default App;