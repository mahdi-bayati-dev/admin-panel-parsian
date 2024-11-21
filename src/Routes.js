import Product from "./Components/product/Product";
import Comment from "./Components/Comments/Comments";
import Users from "./Components/Users/Users";
import Orders from "./Components/Orders/Orders";
import Offs from "./Components/Offs/Offs";

const routes = [
    { path: "/product", element: <Product /> },
    { path: "/comment", element: <Comment /> },
    { path: "/users", element: <Users /> },
    { path: "/orders", element: <Orders /> },
    { path: "/offs", element: <Offs /> }
];

export default routes;
