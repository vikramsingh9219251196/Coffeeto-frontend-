import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../components/Hooks/useCategory";
import Layout from "../components/Layout/Layout";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container position">
        <div className="row"style={{display:"flex",justifyContent:"center",textAlign:"center",position:"relative",left:"4rem",top:"5rem"}}>
          {categories.map((c) => (
            <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <Link to={`/category/${c.slug}`} className="btn btn-primary" style={{backgroundColor:"Highlight"}}>
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;