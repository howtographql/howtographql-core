export enum ApiErrors {
  AUTHORIZATION = 'AUTHORIZATION',
  INVALID = 'INVALID',
}

export async function handleMutationResponse(
  mutationReq: Promise<any>,
): Promise<any> {
  try {
    return await mutationReq;
  } catch (err) {
    if (err.message === 'GraphQL error: Not authorized') {
      return {
        error: ApiErrors.AUTHORIZATION,
      };
    }
    return {
      err: ApiErrors.INVALID,
    };
  }
}
