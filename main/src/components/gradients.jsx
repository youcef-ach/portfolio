import "./gradients.css";

function gradients({ class1, class2, class0 }) {
  return (
    <>
      <div className={`${class0} ${class1} gradient`}></div>
      <div className={`${class0} ${class2} gradient`}></div>
    </>
  );
}

export default gradients;
