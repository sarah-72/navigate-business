export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-10 w-10 border-4 border-gray-200 border-t-emerald-700 rounded-full animate-spin" />

    
        <p className="text-sm text-gray-500">Loading content...</p>

      
        <div className="space-y-2 w-48">
          <div className="h-2 bg-gray-200 rounded animate-pulse" />
          <div className="h-2 bg-gray-200 rounded animate-pulse w-5/6 mx-auto" />
        </div>
      </div>
    </div>
  );
}