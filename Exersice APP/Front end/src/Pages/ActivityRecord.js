import React, { useState, useEffect } from "react";

const ActivityRecord = () => {
  const empty = {
    description: "",
    activityType: "",
    duration: "",
    date: "",
  };
  const [data, setData] = useState([]);
  const [editBoxshow, setEditBoxShow] = useState(false);
  const [editActivityState, seteditActivityState] = useState(empty);
  const [idget, setIdget] = useState(0);

  const handleClick = (event) => {
    const { name, value } = event.target;
    seteditActivityState({ ...editActivityState, [name]: value });
  };
  const dataFetch = async () => {
    let dataFetch = await fetch(`http://localhost:4000/activityget`);
    dataFetch = await dataFetch.json();
    setData(dataFetch);
  };
  useEffect(() => {
    dataFetch();
  }, []);

  const deleteActivity = async (id) => {
    console.log("delete clicked");
    await fetch(`http://127.0.0.1:4000/activityget/${id}`, {
      method: "DELETE",
    });
    dataFetch();
  };

  const editActivity = async (id) => {
    console.log("edit clicked");
    let dataGet = await fetch(`http://127.0.0.1:4000/activityget/${id}`);
    dataGet = await dataGet.json();
    seteditActivityState(dataGet);
    setIdget(id);
    setEditBoxShow(true);
  };
  console.log(editActivityState, "data Get");
  const updateActivityBtn = async () => {
    let idtoUpdate = idget;
    await fetch(`http://127.0.0.1:4000/activityedit/${idtoUpdate}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editActivityState),
    });
    dataFetch();
    seteditActivityState(empty);
    setEditBoxShow(false);
  };
  return (
    <>
      <div className="row m-auto mt-5 text-white bg-dark">
        {data.length === 0 ? (
          <div className="text-Primary flex items-center justify-center text-3xl">
            No activity records available
          </div>
        ) : (
          data.map((elem) => {
            return (

              <div
                className="col-4"
                key={elem._id}
              >
                <div className="cardA mt-3">
                  <div className="cardA__content">
                  <h1>Activities:</h1>
                    <div className="cardA__content-heading mt-3">
                      <p>{elem.activityType}</p>
                     
                    </div>
                    <div className="cardA__content-body">
                      <h3>Description:</h3><p>{elem.description}</p>
                      <h3>Duration:</h3><p>{elem.duration} Minutes</p> 
                      <h3>Date:</h3><p>{elem.date}</p>
                    </div>
                    <div className="cardA__content-footer m-auto">
                      <button onClick={() => editActivity(elem._id)} className="btnA"> Edit
                      </button>
                      <button className="btnA" onClick={() => deleteActivity(elem._id)}> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {editBoxshow && (
        <div className="bg-dark text-white">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-red-800 p-2 space-y-4 sm:w-1/2 w-4/12 absolute lg:left-1/4 lg:top-1/4 sm:left-1/3 sm:top-1/4 top-1/4 left-1/3 text-white"
          >
            <h2 className="text-center sm:text-3xl text-xl">Edit Activity</h2>
            <input
              className="border border-white w-full p-0.5"
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleClick}
              value={editActivityState.description}
            />
            <select
              className="border border-white w-full p-0.5"
              name="activityType"
              onChange={handleClick}
              value={editActivityState.activityType}
            >
              <option className="text-gray-300 text-white bg-dark">Choose Your Activity</option>
              <option className="text-white bg-dark">Running</option>
              <option className="text-white bg-dark">Pull-up</option>
              <option className="text-white bg-dark">Shoulder Press</option>
              <option className="text-white bg-dark">Weight Lifting</option>
            </select>
            <input
              className="border border-white w-full p-0.5"
              type="number"
              name="duration"
              placeholder="Duration in Minutes"
              onChange={handleClick}
              value={editActivityState.duration}
            />
            <input
              className="border border-white w-full p-0.5"
              type="date"
              name="date"
              onChange={handleClick}
              value={editActivityState.date}
            />
            <div className="flex justify-center mt-3">
              <button
                className="bg-white p-3 rounded-full text-red-800 font-bold hover:bg-black"
                onClick={updateActivityBtn}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}


     

    </>
  );
};

export default ActivityRecord;
