const SignupService = async (requestBody) => {
    const request = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                ...requestBody,
            }
        })
    })

    if (request.status !== 200) {
        throw new Error("Error in Signup")
    }

    const response = JSON.parse(request.text())

    return response
}

export {
    SignupService
}