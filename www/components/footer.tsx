export default function Footer() {
  return (
    <footer class="border(t-2 gray-200) bg-gray-100 h-32 flex flex-col gap-4 justify-center">
      <div class="text(gray-600 center)">
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
