# B09 SYNC INSTRUCTIONS

1. Create/switch `b09` from latest branch carrying Review Studio + B01–B08 canonical packages.
2. Copy B09 canonical package without renaming.
3. Commit canonical sync separately.
4. Refresh Review Studio; verify B09 title / 19 tests / media count / isolation.
5. Audit asset reuse; ingest no new assets.
6. Build Master from latest B08 integrated candidate.
7. Build Starter with only BetaCrystal05 unreachable.
8. Run native test matrix + E2E defect/fix/regression.
9. Run formal TG-WEB-SMOKE in actual browser.
10. Return LOCAL_TEST_REPORT_B09 to ChatGPT.
