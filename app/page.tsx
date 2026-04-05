export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-[768px]">
        <iframe
          src="http://player.cdn.moksedul.dev/30073285-6e2c-461b-a39c-3916e5cafefb"
          style={{ width: "100%", aspectRatio: "16/9", border: "0" }}
          allow="accelerometer; autoplay; encrypted-media; gyroscope"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
