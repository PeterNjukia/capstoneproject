import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthProvider";
export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <AuthProvider>     {" "}
          <Navbar />
          {children}
        </AuthProvider>
      
      </body>
    </html>
  );
}
