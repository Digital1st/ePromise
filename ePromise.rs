use anchor_lang::prelude::*;

declare_id!("ePromise_ID");

#[program]
pub mod political_promises {
    use super::*;

    pub fn log_promise(ctx: Context<LogPromise>, description: String, politician: String) -> Result<()> {
        let promise = &mut ctx.accounts.promise;
        promise.description = description;
        promise.politician = politician;
        promise.timestamp = Clock::get().unwrap().unix_timestamp;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct LogPromise<'info> {
    #[account(init, payer = user, space = 8 + 32 + 32 + 8)]
    pub promise: Account<'info, Promise>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Promise {
    pub description: String,
    pub politician: String,
    pub timestamp: i64,
}
