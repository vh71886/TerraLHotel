export function setUser() {
    const user = {
        email: "demo@terralhotel.com",
        password: "welcomeToTerra"
    }
    return user;
}

// refactor to use async/await
export function animateField(field, text) {
    let length = text.length;

    const animation = setInterval(() => {
        let subtext = text.slice(0, text.length - length)
        this.setState({ [field]: subtext })

        if(length === -1 && field === "email") {
            clearInterval(animation);
            this.props.processForm(this.state);
            window.history.back();
            return;
        }
        length--;
    }, 100);
}