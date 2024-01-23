"use client";

const GoogleButton = ({ onClick }) => {
  return (
    <div className="w-fit">
      <button
        className="px-4 py-2 border flex gap-2 border-slate-700 rounded-lg hover:border-slate-400 hover:bg-slate-800 hover:text-primary-white"
        onClick={onClick}
      >
        <img
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default GoogleButton;
