import { SignUp } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface ClerkUserCreatedEvent extends Event {
  detail: {
    user: {
      id: string;
      emailAddresses: { emailAddress: string }[];
      firstName: string;
      lastName: string;
    };
  };
}

export default function SignUpPage() {
  const router = useRouter();

  useEffect(() => {
    const handleUserCreated = async (event: Event) => {
      // Type assertion to convert the generic Event into ClerkUserCreatedEvent
      const clerkEvent = event as unknown as ClerkUserCreatedEvent;
      const { user } = clerkEvent.detail;

      const response = await fetch('/api/auth/create-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clerkId: user.id,
          email: user.emailAddresses[0].emailAddress,
          name: `${user.firstName} ${user.lastName}`,
        }),
      });

      if (response.ok) {
        router.push('/dashboard');
      } else {
        console.error('Failed to create user profile');
      }
    };

    // Add the event listener
    window.addEventListener('clerk:userCreated', handleUserCreated);

    return () => {
      // Remove the event listener
      window.removeEventListener('clerk:userCreated', handleUserCreated);
    };
  }, [router]);

  return (
    <div>
      <SignUp afterSignUpUrl="/dashboard" />
    </div>
  );
}