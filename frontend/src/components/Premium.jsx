import { useState } from "react";
import "../styles/Premium.css";

function Premium() {

  const [message, setMessage] = useState("");

  const plans = [
    {
      title: "Free",
      price: "₹0",
      subtitle: "Forever Free",
      features: [
        "✔ Watch Videos",
        "✔ Create Account",
        "✔ Like & Comment",
        "✖ No Downloads"
      ],
      button: "Current Plan"
    },

    {
      title: "Premium",
      price: "₹199",
      month: "/month",
      features: [
        "✔ Ad-Free Streaming",
        "✔ HD & 4K Quality",
        "✔ Offline Downloads",
        "✔ Early Access"
      ],
      button: "Get Premium",
      popular: true
    },

    {
      title: "Creator Pro",
      price: "₹499",
      month: "/month",
      features: [
        "✔ Unlimited Uploads",
        "✔ Creator Analytics",
        "✔ Monetization Tools",
        "✔ Advanced Video Management"
      ],
      button: "Join Now"
    }
  ];


  const handlePlan = (plan) => {

    if (plan.title === "Premium" || plan.title === "Creator Pro") {
      setMessage("Stripe payment integration will be added in the next version.");
    } 
    else {
      setMessage("You are currently using the Free plan.");
    }
    setTimeout(() => {
      setMessage("");
    }, 3000);

  };


  return (
    <section id="premium" className="premium">


      <div className="section-title">

        <h2>
          Choose Your Plan
        </h2>

        <a href="#">
          Compare Plans
        </a>

      </div>


      {
        message && (
          <div className="premium-message">
            {message}
          </div>
        )
      }



      <div className="plan-container">


        {
          plans.map((plan, index) => (

            <div
              className={`plan-card ${
                plan.popular ? "popular" : ""
              }`}
              key={index}
            >


              {
                plan.popular && (

                  <span className="badge">
                    Most Popular
                  </span>

                )
              }



              <h3>
                {plan.title}
              </h3>



              <h1>

                {plan.price}

                {
                  plan.month && (

                    <span>
                      {plan.month}
                    </span>

                  )
                }

              </h1>



              {
                plan.subtitle && (

                  <p>
                    {plan.subtitle}
                  </p>

                )
              }



              <ul>

                {
                  plan.features.map((feature, i) => (

                    <li key={i}>
                      {feature}
                    </li>

                  ))
                }

              </ul>



              <button
                onClick={() => handlePlan(plan)}
              >
                {plan.button}
              </button>


            </div>

          ))
        }


      </div>


    </section>
  );
}

export default Premium;