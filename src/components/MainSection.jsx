import "../../src/App.css";
import Card from "../../src/components/Card";
export default function MainSection() {
  return (
    <>
      <div className="container">
        <Card
          image="../src/assets/programming_language/js.png"
          title="JavaScript"
          exists="block"
          progress="80"
        />
        <Card
          image="../src/assets/programming_language/react.png"
          title="React"
          exists="block"
          progress="70"
        />
        <Card
          image="../src/assets/programming_language/html.png"
          title="HTML"
          exists="block"
          progress="95"
        />
        <Card
          image="../src/assets/programming_language/css.png"
          title="CSS"
          exists="block"
          progress="85"
        />
        <Card
          image="../src/assets/programming_language/php.png"
          title="PHP"
          exists="block"
          progress="85"
        />
        <Card
          image="../src/assets/programming_language/node.png"
          title="Node"
          exists="block"
          progress="50"
        />
        <Card
          image="../src/assets/programming_language/express.png"
          title="Express"
          exists="block"
          progress="30"
        />
        <Card
          image="../src/assets/programming_language/mysql.png"
          title="MySQL"
          exists="block"
          progress="80"
        />
        <Card
          image="../src/assets/programming_language/python.png"
          title="Python"
          exists="block"
          progress="75"
        />
        <Card
          image="../src/assets/programming_language/java.png"
          title="Java"
          exists="block"
          progress="50"
        />
        <Card
          image="../src/assets/programming_language/bash.png"
          title="Bash"
          exists="block"
          progress="50"
        />
        <Card
          image="../src/assets/programming_language/github.png"
          title="GitHub"
          exists="block"
          progress="80"
        />
      </div>
      <div className="content_divider">
        <div className="content_divider_line"></div>
        <div className="content_header">
          <div className="content_header_icon">
            <i className="fa-solid fa-list-check"></i>
          </div>
          <div className="content_header_name">Projects</div>
        </div>
      </div>
      <div className="container">
        <Card
          image="../src/assets/programming_language/js.png"
          title="SQL Dummy Data Generator"
        />
        <Card
          image="../src/assets/programming_language/react.png"
          title="YouTube Portfolio"
        />
        <Card
          image="../src/assets/programming_language/html.png"
          title="Password Generator"
        />
        <Card
          image="../src/assets/programming_language/css.png"
          title="Sneaker Head"
        />
        <Card
          image="../src/assets/programming_language/php.png"
          title="JavaScript Calculator"
        />
        <Card
          image="../src/assets/programming_language/node.png"
          title="Weather Application"
        />
      </div>
      <div className="content_divider">
        <div className="content_divider_line"></div>
        <div className="content_header">
          <div className="content_header_icon">
            <i className="fa-solid fa-list-check"></i>
          </div>
          <div className="content_header_name">Projects</div>
        </div>
      </div>
      <div className="container">
        <Card
          image="../src/assets/programming_language/js.png"
          title="JavaScript"
        />
        <Card
          image="../src/assets/programming_language/react.png"
          title="React"
        />
        <Card
          image="../src/assets/programming_language/html.png"
          title="HTML"
        />
        <Card image="../src/assets/programming_language/css.png" title="CSS" />
        <Card image="../src/assets/programming_language/php.png" title="PHP" />
        <Card
          image="../src/assets/programming_language/node.png"
          title="Node"
        />
        <Card
          image="../src/assets/programming_language/express.png"
          title="Express"
        />
        <Card
          image="../src/assets/programming_language/mysql.png"
          title="MySQL"
        />
        <Card
          image="../src/assets/programming_language/python.png"
          title="Python"
        />
        <Card
          image="../src/assets/programming_language/java.png"
          title="Java"
        />
        <Card
          image="../src/assets/programming_language/bash.png"
          title="Bash"
        />
        <Card
          image="../src/assets/programming_language/github.png"
          title="GitHub"
        />
      </div>
    </>
  );
}
