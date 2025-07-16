import Dropdown2 from '../components/Dropdown2'; 

function Terms() {
  const questionText = "1. Acceptance of Terms and Conditions";
  const answerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Curabitur euismod, nunc non bibendum tincidunt, justo metus fermentum erat, 
  vel blandit mauris velit ut sapien.`;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Terms</h1>
      <Dropdown2 question={questionText} answer={answerText} />
    </div>
  
  );
}

export default Terms;
