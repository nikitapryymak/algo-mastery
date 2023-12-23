export default function Layout({ children }) {
  return (
    <div className="flex justify-center mt-12 bg-gray-900 max-w-[800px] mx-auto">
      {children}
    </div>
  );
}
