import { Decorator } from "@storybook/react"

export const WithCustomFont: Decorator = (Story) => (
  <>
    <style jsx global>
      {`
        @font-face {
          font-family: "SFProText";
          src: url(/fonts/SFProText-Regular.ttf) format("truetype");
          font-style: normal;
          font-display: swap;
          font-weight: 100 400;
        }

        @font-face {
          font-family: "SFProText";
          src: url(/fonts/SFProText-Medium.ttf) format("truetype");
          font-style: normal;
          font-display: swap;
          font-weight: 500;
        }

        @font-face {
          font-family: "SFProText";
          src: url(/fonts/SFProText-Semibold.ttf) format("truetype");
          font-style: normal;
          font-weight: 600;
        }

        @font-face {
          font-family: "SFProText";
          src: url(/fonts/SFProText-Bold.ttf) format("truetype");
          font-style: normal;
          font-weight: 700;
        }

        @font-face {
          font-family: "SFProText";
          src: url(/fonts/SFProText-Heavy.ttf) format("truetype");
          font-style: normal;
          font-weight: 800 900;
        }

        @font-face {
          font-family: "Menlo";
          src: url(/fonts/Menlo-Regular.ttf) format("truetype");
          font-style: normal;
          font-weight: 100 400;
        }

        @font-face {
          font-family: "Menlo";
          src: url(/fonts/Menlo-Bold.ttf) format("truetype");
          font-style: normal;
          font-weight: 700 900;
        }

        @font-face {
          font-family: "InputMono";
          src: url(/fonts/InputMono-Regular.ttf) format("truetype");
          font-weight: 100 400;
        }

        @font-face {
          font-family: "Seti";
          src: url(/fonts/seti.ttf) format("truetype");
          font-weight: 100 400;
        }

        :root {
          --font-sfprotext: "SFProText";
          --font-menlo: "Menlo";
          --font-inputmono: "InputMono";
          --font-seti: "seti";
        }
      `}
    </style>
    <div className="font-storybook">
      <Story />
    </div>
  </>
)
