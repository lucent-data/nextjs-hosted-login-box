import { useEffect } from "react";

export default function MyPage() {
  useEffect(() => {
    throw new Error("Test error");
  }, []);
  return (
    <div>
      <h1>Test Page</h1>
      <div>
        <span>Click the button for error throw</span>
      </div>
      <div>
        <button
          onClick={() => {
            throw new Error("Test error");
          }}
        >
          Throw
        </button>
      </div>
    </div>
  );
}
