import React, { useEffect, useState } from "react";
import './MenuContainer.css';
import { categories } from "../../utils/data";
import { useStateValue } from "../../context/StateProvider";
import ShopProducts from "./ShopProducts";

const MenuContainer = () => {
  const [filter, setFilter] = useState("shirts");
  const [{clothes},dispatch] = useStateValue()

  return (
    <section  id="menu">
      <div className="wrapper ">
        <div className="wrapperDiv">
          {categories &&
            categories.map((category) => (
              <div
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? "bgColorBox" : "menuCategories"
                }`}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`${
                    filter === category.urlParamName
                      ? "bg-white"
                      : "bg-cartNumBg"
                  } textClass group-hover:bg-white flex items-center justify-center`}
                >
                </div>
                <p
                  className={`text-sm ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } textClass group-hover:text-white`}
                >
                  {category.name}
                </p>
              </div>
            ))}
        </div>

        <div className="filteredProducts">
          <ShopProducts
            flag={true}
            data={clothes?.filter((n) => n.category == filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;