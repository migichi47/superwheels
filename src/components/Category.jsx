export function Category({ name, image }) {
  return (
    <div
      className="flex flex-col gap-2 group transition-colors cursor-pointer"
      onClick={() => {
        switch (name.toLowerCase()) {
          case "side mirrors":
            console.log(1);
            break;
          case "doors":
            console.log(2);
            break;
          case "bonnets":
            console.log(3);
            break;
          case "wind breakers":
            console.log(4);
            break;
          case "nose cuts":
            console.log(5);
            break;
          case "headlights":
            console.log(6);
            break;
          case "fog lights":
            console.log(7);
            break;
          case "bumpers":
            console.log(8);
            break;
          case "tail lights":
            console.log(9);
            break;
          case "fenders/wing":
            console.log(10);
            break;
        }
      }}
    >
      <div className="overflow-hidden bg-gray-200 dark:bg-gray-300 rounded-lg p-2 group-hover:bg-gray-300 transition-colors">
        <img
          src={image}
          alt=""
          className="w-80 group-hover:scale-115 transition-all duration-400"
        />
      </div>
      <h3 className="text-sm text-center dark:text-gray-300 group-hover:text-secondary transition-colors">{name}</h3>
    </div>
  );
}