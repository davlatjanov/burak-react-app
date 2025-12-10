import { useState } from "react";
import { GlobalContext } from "../hooks/useGlobals";
import { Member } from "../../lib/types/member";
import Cookies from "universal-cookie";

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const cookies = new Cookies();
  if (!cookies.get("accessToken")) {
    localStorage.removeItem("memberData");
  }

  const [authMember, setAuthMember] = useState<Member | null>(
    localStorage.getItem("memberData")
      ? JSON.parse(localStorage.getItem("memberData") as string)
      : null
  );

  return (
    <GlobalContext.Provider
      value={{
        authMember,
        setAuthMember,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
