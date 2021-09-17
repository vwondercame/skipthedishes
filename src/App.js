import { BrowserRouter, Switch, Route } from "react-router-dom";
import OrderList from "./components/orderlist/OrderList";
import OrderPage from "./components/orderpage/OrderPage";
import PageHeader from "./components/pageheader/PageHeader";
function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Switch>
        <Route
          path="/"
          exact
          render={(routerProps) => <OrderPage {...routerProps} />}
        />
        <Route
          path="/orderList"
          render={(routerProps) => <OrderList {...routerProps} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
