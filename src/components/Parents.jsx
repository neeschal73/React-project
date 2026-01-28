import { useNavigate } from "react-router-dom";

export default function Parents({ name, age, setName, setAge }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/child");
    setName("");
    setAge("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center p-20"
    >
      <div className="flex gap-x-10 pb-10">
        <input
          required
          className="w-1/2 border-2 p-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name here"
        />

        <input
          required
          className="w-1/2 border-2 p-2"
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          placeholder="Enter your age here"
        />

        <button type="submit" className="border px-4 py-2 active:scale-90 rounded-2xl">
          Submit
        </button>
      </div>

      <div className="flex gap-x-10">
        <div className="flex justify-center items-center  w-auto border p-10">
          {name}
        </div>
        <div className="flex justify-center items-center w-auto border p-10">
          {age}
        </div>
      </div>
    </form>
  );
}