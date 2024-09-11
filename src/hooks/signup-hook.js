import { useMutation } from "@tanstack/react-query";
import { SignupService } from "../services/signup-service";

const SignupHook = () => {
    return useMutation({
        mutationKey: "signup",
        mutationFn: SignupService
    })
}

export {
    SignupHook
}