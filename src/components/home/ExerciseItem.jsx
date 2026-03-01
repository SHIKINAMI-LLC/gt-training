import { useState } from 'react';

export default function ExerciseItem({ ex }) {
  const [open, setOpen] = useState(false);

  // Header row (section divider)
  if (ex.isHeader) {
    const cls = ex.headerClass || 'ex-section-hdr';
    return <div className={cls}>{ex.name}</div>;
  }

  const hasDetail = ex.howto?.length || ex.points?.length || ex.ng;

  return (
    <div className="exercise-item">
      <div
        className={`flex items-start justify-between gap-2 ${hasDetail ? 'cursor-pointer' : ''}`}
        onClick={() => hasDetail && setOpen(o => !o)}
      >
        <div className="flex-1 min-w-0">
          <span className="font-semibold text-sm text-white">{ex.name}</span>
          {ex.detail && (
            <span className="text-xs text-gray-400 ml-2">{ex.detail}</span>
          )}
        </div>
        {hasDetail && (
          <span className="text-gray-500 text-xs flex-shrink-0 mt-0.5">
            {open ? '▲' : '▼'}
          </span>
        )}
      </div>

      {ex.interval && !open && (
        <div className="text-xs text-gray-500 mt-0.5">{ex.interval}</div>
      )}

      {open && (
        <div className="mt-2 space-y-2">
          {ex.howto?.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-racing-yellow mb-1">やり方</div>
              <ol className="list-decimal list-inside space-y-0.5">
                {ex.howto.map((step, i) => (
                  <li key={i} className="text-xs text-gray-300 leading-relaxed">{step}</li>
                ))}
              </ol>
            </div>
          )}
          {ex.points?.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-racing-orange mb-1">ポイント</div>
              <ul className="space-y-0.5">
                {ex.points.map((p, i) => (
                  <li key={i} className="text-xs text-gray-300 leading-relaxed">✓ {p}</li>
                ))}
              </ul>
            </div>
          )}
          {ex.ng && (
            <div className="text-xs text-red-400 bg-red-900/20 rounded px-2 py-1">
              {ex.ng}
            </div>
          )}
          {ex.interval && (
            <div className="text-xs text-gray-500">⏱ {ex.interval}</div>
          )}
        </div>
      )}
    </div>
  );
}
