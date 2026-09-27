/** Shared hand-painted shapes. Coordinates are centred around each ingredient. */
export function Olive({ small = false }: { small?: boolean }) {
  return (
    <g transform={small ? "scale(.72)" : undefined}>
      <path
        d="M-51-14C-45-43-6-56 25-42 55-31 60-5 42 22 26 48-11 53-37 34-53 23-59 5-51-14Z"
        fill="#8d942d"
      />
      <path
        d="M-44 17C-22 42 20 35 43 6 40 30 14 48-10 44-28 41-39 33-44 17Z"
        fill="#546021"
      />
      <path
        d="M-46-9C-39-29-23-37-8-37"
        fill="none"
        stroke="#b9bd56"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M-38-11Q-32-25-25-26M-14-33L-6-34"
        fill="none"
        stroke="#f0ebbf"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M23-27C32-28 37-19 33-10 31-3 23-5 20-13 17-18 18-25 23-27Z"
        fill="#4b5424"
      />
      <path
        d="M22-24Q21-16 28-10"
        fill="none"
        stroke="#6d6d2c"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  );
}

export function Pepper() {
  return (
    <g>
      <path
        d="M-101 35C-111 9-90-16-59-25-21-37 11-17 47-27 66-32 76-42 79-56 82-66 91-61 92-49 99-13 62 8 23 13-11 17-56 4-79 25-91 37-96 46-101 35Z"
        fill="#b6ae29"
      />
      <path
        d="M-99 29C-95 8-73-3-50-7-13-14 14-1 46-12 69-18 82-33 87-49 87-18 57 0 22 4-11 9-49-3-75 14-86 20-92 28-99 29Z"
        fill="#d2c845"
      />
      <path
        d="M-60-19C-32-29-7-17 17-20"
        fill="none"
        stroke="#eeebb0"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M-80 26C-50 0-12 22 26 10 42 6 54 4 65-3"
        fill="none"
        stroke="#788329"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M-100 34L-105 44"
        stroke="#788329"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>
  );
}

export function Anchovy({ white = false }: { white?: boolean }) {
  return (
    <g>
      <path
        d="M-73 26C-94 8-78-9-46-17L41-42C78-52 99-34 87-11 73 13 36 19 0 22-34 24-52 31-43 40-33 48-9 38 2 34 14 30 20 33 11 41-14 62-50 64-62 46-79 28-53 13-18 6 9 1 59-4 66-20 73-33 46-28 32-24L-43 2C-55 6-60 13-52 19Z"
        fill={white ? "#b9b7a0" : "#956d49"}
      />
      <path
        d="M-68 17C-76 2-52-4-31-10L41-33C61-40 79-35 76-25 69-5 30-2-4 5-33 11-60 21-54 36"
        fill="none"
        stroke={white ? "#eeebd5" : "#d0b28b"}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M-48 44C-35 53-7 40 9 37M-66 12C-47-1 18-13 48-26"
        fill="none"
        stroke={white ? "#72796d" : "#5f5034"}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M-49-9L20-31M43-37L59-38"
        fill="none"
        stroke="#eee0bc"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  );
}

export function RedPepper() {
  return (
    <g>
      <path
        d="M-70 7C-35-18 4-24 38-10 65 1 45 25 9 27L-26 22C-6 13 14 12 24 6 3-3-30 6-53 19Z"
        fill="#ad4d31"
      />
      <path
        d="M-56 6C-22-10 2-14 29-6"
        fill="none"
        stroke="#db8c62"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>
  );
}
