import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import ErrorBoundary from "./modules/ErrorBoundary";
import HomeModule from "./modules/Home";

function App() {
  return (
    <Container>
      <ErrorBoundary>
        <h1>Contactz</h1>
        <HomeModule />
      </ErrorBoundary>
    </Container>
  );
}

export default App;
