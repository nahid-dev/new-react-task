import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [newData, setNewData] = useState([]);

  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setNewData([...newData, data]);
    reset();
  };
  console.log(newData);
  const handleClick = (val) => {
    setShow(val);
  };

  // Filter the data based on the selected 'show' value
  const filteredData = newData.filter((item) => {
    if (show === "all") {
      return true;
    } else if (show === "active") {
      return item.status === "active";
    } else if (show === "completed") {
      return item.status === "completed";
    }
    return true;
  });

  // Sort the filtered data by status: active, completed, and others
  filteredData.sort((a, b) => {
    const statusOrder = { active: 1, completed: 2 };
    return (
      (statusOrder[a.status] || 3) - (statusOrder[b.status] || 3) ||
      a.name.localeCompare(b.name)
    );
  });

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                {...register("name", { required: true })}
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                {...register("status", { required: true })}
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
