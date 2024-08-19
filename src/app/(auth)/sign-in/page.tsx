import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import { AuthForm } from '@/features/auth';

const Page = () => {
  return (
    <div className="h-full w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[900px]">
      <div className="flex items-center justify-center py-12">
        <Card className="mx-auto max-w-sm border-none shadow-lg shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Login</CardTitle>
            <CardDescription className="mt-2 text-gray-600">
              Sign in to continue to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <AuthForm />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="hidden items-center bg-background/95 lg:block" />
    </div>
  );
};

export default Page;
