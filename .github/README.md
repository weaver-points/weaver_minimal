# Selective CI/CD System

This repository uses a selective CI/CD system that only runs processes for folders that have actually changed, optimizing build times and resource usage.

## How It Works

The system uses GitHub Actions with path filtering to determine which components have changed and only runs the relevant CI/CD processes.

### Workflows

1. **`selective-ci.yml`** - Runs on push/PR to `main` and `develop` branches
2. **`deploy.yml`** - Runs on push to `main` branch and manual triggers

### Path Detection

The system monitors these folders:

-   `client/` - React/TypeScript frontend
-   `contracts/` - Cairo smart contracts
-   `backend/` - Backend services (placeholder)

## Scenarios

### Scenario 1: Only Client Changes

If you only modify files in `client/`:

-   ✅ Client CI runs (lint, build, test)
-   ❌ Contracts CI skips
-   ❌ Backend CI skips
-   ✅ Only client deployment runs

### Scenario 2: Only Contract Changes

If you only modify files in `contracts/`:

-   ❌ Client CI skips
-   ✅ Contracts CI runs (build, test)
-   ❌ Backend CI skips
-   ✅ Only contract deployment runs

### Scenario 3: Multiple Changes

If you modify both `client/` and `contracts/`:

-   ✅ Client CI runs
-   ✅ Contracts CI runs
-   ❌ Backend CI skips
-   ✅ Both client and contract deployments run

## Manual Deployment

You can manually trigger deployments using the GitHub Actions UI:

1. Go to **Actions** tab
2. Select **Selective Deployment** workflow
3. Click **Run workflow**
4. Choose which components to deploy:
    - ☑️ Deploy client (frontend)
    - ☑️ Deploy contracts
    - ☑️ Deploy backend

## Configuration

### Environment Variables

For contract deployment, set these secrets in your repository:

-   `STARKNET_PRIVATE_KEY` - Your Starknet private key
-   `STARKNET_RPC_URL` - Starknet RPC endpoint

### Customization

To add new folders or modify processes:

1. **Add new folder monitoring**:

    ```yaml
    filters: |
        new-folder:
          - 'new-folder/**'
    ```

2. **Add new CI job**:

    ```yaml
    new-folder-ci:
        needs: changes
        if: needs.changes.outputs.new-folder == 'true'
        # ... your CI steps
    ```

3. **Add new deployment job**:
    ```yaml
    deploy-new-folder:
        needs: [changes]
        if: needs.changes.outputs.new-folder == 'true'
        # ... your deployment steps
    ```

## Benefits

-   **Faster CI/CD**: Only runs necessary processes
-   **Cost effective**: Reduces GitHub Actions minutes usage
-   **Focused feedback**: Only relevant tests run for your changes
-   **Parallel execution**: Different components can run simultaneously
-   **Manual control**: Can manually trigger specific deployments

## Troubleshooting

### Job Skipped Unexpectedly

-   Check if your changes are in the monitored paths
-   Verify the path filters in the workflow files
-   Ensure you're pushing to the correct branches

### Deployment Fails

-   Check environment variables are set correctly
-   Verify deployment credentials have proper permissions
-   Review deployment logs for specific error messages

### Adding New Components

1. Update path filters in both workflows
2. Add corresponding CI and deployment jobs
3. Test with a small change to verify the system works
