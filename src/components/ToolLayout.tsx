export function ToolLayout({
  preview,
  footer,
  settings,
}: {
  preview: JSX.Element;
  footer: JSX.Element;
  settings: JSX.Element;
}) {
  return (
    <div className='flex flex-wrap min-h-screen'>
      <main className='flex flex-col border-l border-r border-slate-700 grow basis-96'>
        {preview}
        <footer className='p-4'>{footer}</footer>
      </main>
      <aside
        className='
        grow md:grow-0 shrink-0
        md:max-h-screen sm:overflow-y-scroll divide-slate-700 divide-y
        [&::-webkit-scrollbar]:absolute
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-thumb]:bg-slate-700
        [&::-webkit-scrollbar]:bg-gray-950
        [&::-webkit-scrollbar-thumb]:rounded-full
      '
      >
        {settings}
      </aside>
    </div>
  );
}
