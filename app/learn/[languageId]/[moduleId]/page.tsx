import { Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Add this interface to match Next.js expected types
interface PageParams {
  languageId: string;
  moduleId: string;
}

// Use the exact PageProps interface from Next.js
export interface PageProps {
  params: PageParams;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function ModulePage({ params, searchParams }: PageProps) {
  const { languageId, moduleId } = params;
  
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Card>
            <CardContent className="pt-6">
              <div>
                {(moduleId === "introduction" || moduleId === "basics" || moduleId === "intermediate") && (
                  <div className="bg-white border border-slate-200 rounded-md p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="h-4 w-4 text-slate-400" />
                      <h4 className="font-medium text-slate-800">Advanced Conversation</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">Master idiomatic expressions and fluent conversation.</p>
                    <div className="text-xs text-slate-500">
                      Complete previous modules to unlock
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 