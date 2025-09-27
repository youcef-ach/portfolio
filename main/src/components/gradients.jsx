import "./gradients.css";

function gradients({ class1, class2, class0 }) {
  return (
    <>
      <div className={`${class0} ${class1}`}></div>
      <div className={`${class0} ${class2}`}></div>
    </>
  );
}

export default gradients;
