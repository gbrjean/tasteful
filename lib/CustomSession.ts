import { Session } from "next-auth";

interface CustomSession extends Session {
  user: {
    id?: string | null | undefined;
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}

export default CustomSession;