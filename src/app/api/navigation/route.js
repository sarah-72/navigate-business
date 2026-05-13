import { NextResponse } from "next/server";

export async function GET() {
  try {
    const navigation = {
      menuItems: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Workshops", href: "/workshops" },
        { label: "Memberships", href: "/memberships" },
        { label: "Partnerships", href: "/partnerships" },
        { label: "Contact", href: "/contact" }
      ]
    };

    return NextResponse.json(navigation);
  } catch (error) {
    console.error("Error fetching navigation:", error);

    return NextResponse.json(
      { error: "Failed to fetch navigation" },
      { status: 500 }
    );
  }
}