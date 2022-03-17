import Card from "./Card";
import "./Contact.css";
import Item from "./Item";

function Contact() {
  return (
    <div className="contact">
      <div>
          <h2 className="contact-h2">Contact</h2>
        <Item
          subtitle={"Mobile:"}
          date={""}
          description={"+905397165675"}
        />
        <Item
          subtitle={"Email:"}
          date={""}
          description={"busrarigun@gmail.com"}
        />
        <Item
          subtitle={"Address:"}
          date={""}
          description={"Beylikdüzü/ISTANBUL"}
        />
        <Item
        subtitle={"Linked-In:"}
        date={""}
        description={""}
          link={"https://www.linkedin.com/in/busraarigun"}
          linkText={"linkedin.com/in/busraarigun"}
        />
      </div>
    </div>
  );
}

export default Contact;
