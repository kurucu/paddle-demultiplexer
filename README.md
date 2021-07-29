# Paddle Demultiplexer

Pass your Paddle webhook notifications to multiple different applications based on `subscription_plan_id`.

## Installation

1. Fork this repository.
2. Clone the repository.
3. Update the `config.json` file with your mappings, here's an example:

```json
{
    "mappings": {
        "12345": "https://myapp.com/paddle/webhook"
    }
}
```

You should use the "Plan ID" as the key and set the value to your application's webhook route.

4. Deploy your repository to Vercel.
5. Configure Paddle to point to your new Vercel project.

## Updating

If any updates are made in the future, you can use GitHub's "Fetch upstream" functionality to update your repository and re-deploy.