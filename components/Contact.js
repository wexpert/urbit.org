import NewsletterSignup from "./NewletterSignup";
import { name, contact } from "../lib/constants";
import { useCopyToClipboard } from "../lib/hooks";

export default function Contact({ emphasize }) {
  const [copyStatus, copy] = useCopyToClipboard(contact.urbitCommunity);

  const linkText = emphasize ? "text-green-400" : "text-wall-600";
  const border = emphasize ? "border-green-400" : "border-wall-600";
  const washedBg = emphasize ? "bg-green-100" : "bg-wall-100";
  const iconColor = emphasize ? "#00B171" : "#24221E";

  const buttonIcon =
    copyStatus === "inactive" ? (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.2 1.6C3.2 0.716344 3.91634 0 4.8 0H11.3615L14.9333 2.38124V12.2667C14.9333 13.1503 14.217 13.8667 13.3333 13.8667H12.8V14.4C12.8 15.2837 12.0837 16 11.2 16H2.66667C1.78301 16 1.06667 15.2837 1.06667 14.4V3.73333C1.06667 2.84968 1.78301 2.13333 2.66667 2.13333H3.2V1.6ZM3.2 3.2H2.66667C2.37211 3.2 2.13333 3.43878 2.13333 3.73333V14.4C2.13333 14.6946 2.37211 14.9333 2.66667 14.9333H11.2C11.4946 14.9333 11.7333 14.6946 11.7333 14.4V13.8667H4.8C3.91634 13.8667 3.2 13.1503 3.2 12.2667V3.2Z"
          fill={iconColor}
        />
      </svg>
    ) : copyStatus === "copied" ? (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM7.54325 11.4247L12.1498 5.66647L11.3169 5.00013L7.39013 9.90859L4.60812 7.59025L3.92526 8.40969L7.54325 11.4247Z"
          fill={iconColor}
        />
      </svg>
    ) : (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM10.8229 11.5772L8.00004 8.75429L5.17716 11.5772L4.42292 10.8229L7.24579 8.00004L4.42292 5.17716L5.17716 4.42292L8.00004 7.24579L10.8229 4.42292L11.5772 5.17716L8.75429 8.00004L11.5772 10.8229L10.8229 11.5772Z"
          fill={iconColor}
        />
      </svg>
    );

  return (
    <div>
      <div className="measure">
        <h4 className="pb-6">
          If you’d like to follow our progress, we send monthly updates via
          email:
        </h4>
      </div>
      <NewsletterSignup color={border} />
      <h4 className="mt-12 text-wall-500">
        Follow us on{" "}
        <a className={linkText} href={contact.twitter}>
          Twitter
        </a>
      </h4>
      <h4 className="mt-6 text-wall-500">
        Explore code on{" "}
        <a className={linkText} href={contact.github}>
          Github
        </a>
      </h4>
      <h4 className="mt-4 text-wall-500 flex items-baseline flex-wrap">
        Boot Urbit and join{" "}
        <div className="md:ml-2 rounded-lg flex items-stretch">
          <code
            className={`rounded-l-lg px-2 md:px-4 py-2 ${washedBg} flex items-center h-full ${linkText}`}
          >
            {contact.urbitCommunity}
          </code>
          <button
            className={`rounded-r-lg px-4 ml-0.5 flex-1 flex justify-center items-center ${washedBg}`}
            onClick={() => copy()}
          >
            {buttonIcon}
          </button>
        </div>
      </h4>
    </div>
  );
}
