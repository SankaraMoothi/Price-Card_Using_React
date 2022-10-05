import "./App.css";
import Card from "./card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const datas = [
    {
      title: "FREE",
      price: "$0",
      user: "Single User",
      data: "5GB Storage",
      project: "Unlimited Public Projects",
      access: "Community Access",
      project1test: false,
      project1: "Unlimited Private Projects",
      PhoneSupporttest: false,
      PhoneSupport: "Dedicated Phone Support",
      domaintest: false,
      domain: "Free Subdomain",
      statustest: false,
      status: "Monthly Status Reports",
    },
    {
      title: "PLUS",
      price: "$9",
      userBold: true,
      user: "5 User",
      data: "50GB Storage",
      project: "Unlimited Public Projects",
      access: "Community Access",
      project1test: true,
      project1: "Unlimited Private Projects",
      PhoneSupporttest: true,
      PhoneSupport: "Dedicated Phone Support",
      domaintest: true,
      domain: "Free Subdomain",
      statustest: false,
      status: "Monthly Status Reports",
    },
    {
      title: "PRO",
      price: "$49",
      userBold: true,
      user: "Unlimited User",
      data: "150GB Storage",
      project: "Unlimited Public Projects",
      access: "Community Access",
      project1test: true,
      project1: "Unlimited Private Projects",
      PhoneSupporttest: true,
      PhoneSupport: "Dedicated Phone Support",
      domaintest: true,
      domain: "Unlimit Free Subdomain",
      statustest: true,
      status: "Monthly Status Reports",
    },
    {
      title: "PLUS",
      price: "$9",
      userBold: true,
      user: "5 User",
      data: "50GB Storage",
      project: "Unlimited Public Projects",
      access: "Community Access",
      project1test: true,
      project1: "Unlimited Private Projects",
      PhoneSupporttest: true,
      PhoneSupport: "Dedicated Phone Support",
      domaintest: true,
      domain: "Free Subdomain",
      statustest: false,
      status: "Monthly Status Reports",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          {datas.map((elements) => {
            return <Card cardDetails={elements}></Card>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
