import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () =>{
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);

      const { request, cancel } = userService.getAll<User>();
      request
        .then((res) => {
          setIsLoading(false);
          setUsers(res.data);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });
      //.finally(() => setIsLoading(false));

      return () => {
        cancel();
      };

    }, []);

    return {users, error, isLoading, setUsers, setError}
}

export default useUsers;