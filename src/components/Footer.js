import React, { useEffect, useState } from "react";

function Footer() {
  const [result, setResult] = useState([]);
  const [file, setFile] = useState();
  const [post, setPost] = useState("");
  let formData = new FormData();

  const handleText = (e) => {
    setPost(e.target.value);
  };
  const onClickButton = () => {};

  const sendPost = () => {
    formData.append("title", post);
    fetch("http://localhost:3001/todoAdd", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("post req:", res);
        onClickButton();
      });
  };
  const handleDelete = (e) => {
    //console.log("value", value);
    fetch("http://localhost:3001/todoDelete/" + e.target.value, {
      method: "DELETE",
    }).then((res) => {
      console.log("delete res", res);
      onClickButton();
    });
  };
  console.log("file", file);
  return (
    <div className="footer">
      <button onClick={onClickButton}>Testing back</button>
      {result.length
        ? result.map((item) => {
            return (
              <>
                <p>{item.title}</p>

                <button value={item.id} onClick={handleDelete}>
                  Delete
                </button>
              </>
            );
          })
        : null}

      <div>
        <div>Enter a post</div>
        <input
          type="text"
          onChange={handleText}
          value={post}
          placeholder="Enter text"
        />
        <button onClick={sendPost}>Submit</button>
      </div>
    </div>
  );
}

export default Footer;
