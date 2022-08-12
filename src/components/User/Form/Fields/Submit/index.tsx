type Props = { title: string };

const Submit = ({ title }: Props) => {
  return (
    <input
      type="submit"
      className="w-full bg-pink py-4 cursor-pointer text-white font-lato font-bold text-lg rounded-sm"
      value={title}
    />
  );
};

export default Submit;
