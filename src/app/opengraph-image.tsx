import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
    "João Queiroz — Backend Java Engineer";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background: "#ffffff",
                    color: "#18181b",
                    fontFamily: "Arial, Helvetica, sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    <div
                        style={{
                            fontSize: "68px",
                            lineHeight: 1.1,
                            fontWeight: 700,
                            letterSpacing: "-2px",
                        }}
                    >
                        João Queiroz
                    </div>

                    <div
                        style={{
                            fontSize: "34px",
                            lineHeight: 1.3,
                            fontWeight: 600,
                            color: "#52525b",
                        }}
                    >
                        Backend Java Engineer
                    </div>

                    <div
                        style={{
                            marginTop: "8px",
                            fontSize: "24px",
                            lineHeight: 1.5,
                            color: "#71717a",
                        }}
                    >
                        SAP Commerce Cloud • Architecture • Integrations • Scalable
                        E-commerce
                    </div>
                </div>

                <div
                    style={{
                        width: "100%",
                        height: "3px",
                        marginTop: "48px",
                        background: "#18181b",
                    }}
                />

                <div
                    style={{
                        marginTop: "24px",
                        fontSize: "20px",
                        color: "#71717a",
                    }}
                >
                    joaoqueiroz.dev
                </div>
            </div>
        ),
        {
            ...size,
        },
    );
}
