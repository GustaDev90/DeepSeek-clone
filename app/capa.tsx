const Capa: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-56">
        <h1 className="text-4xl font-bold">DeepSeek-V3 Capabilities</h1>
        <div className="mt-7 text-base font-normal text-gray-500">
          <p className="md:ml-16">
            DeepSeek-V3 achieves a significant breakthrough in inference speed over previous models.
          </p>
          <p>
            It tops the leaderboard among open-source models and rivals the most advanced closed-source models globally.
          </p>
        </div>
      </div>
      <hr className="mt-8" />
    </div>
  );
};

export default Capa;