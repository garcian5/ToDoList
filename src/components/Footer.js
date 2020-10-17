import React from "react"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="col">
                        <ul className="social-links">
                            <li><a href="https://github.com/garcian5/ToDoList" title="Nheljee's Github"><ion-icon name="logo-github"></ion-icon></a></li>
                            <li><a href="https://www.linkedin.com/in/nheljee-rose-garcia/" title="Nheljee's LinkedIn"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                            <li><a href="https://nheljee-dice-game.netlify.app/" title="Other Websites"><ion-icon name="apps-outline"></ion-icon></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <p>
                        Created by Nheljee Garcia.
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer