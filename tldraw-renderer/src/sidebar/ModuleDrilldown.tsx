import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ChangesBreakdown } from "../jsonPlanManager/jsonPlanManager";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChangesBadge from "./ChangesBadge";

interface ModuleDrilldownProps {
    moduleDrilldownData: { category: string, textToShow: string, changesBreakdown: ChangesBreakdown }[];
}

const ModuleDrilldown = ({
    moduleDrilldownData
}: ModuleDrilldownProps) => {
    return (
        <>
            <div className="bg-[#302B35] text-white overflow-scroll h-full grow rounded text-xs">
                {moduleDrilldownData.map((data, index) => {
                    return (
                        <Accordion key={index} disableGutters sx={{
                            "&.MuiPaper-root": {
                                backgroundColor: "transparent",
                                boxShadow: "none",
                                border: "none",
                            }
                        }}>
                            <AccordionSummary
                                sx={{
                                    borderBottom: "1px solid white",
                                }}
                                expandIcon={<ExpandMoreIcon sx={{
                                    color: "white"
                                }} />}>
                                <div className="flex items-center">
                                    <div className="text-lg text-white truncate max-w-20">{data.category}</div>
                                    <div className="flex">
                                        {
                                            Object.entries(data.changesBreakdown).map(([action, number]) => (
                                                <ChangesBadge key={index + "-" + action} action={action} number={number} />
                                            ))
                                        }
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    borderBottom: "1px solid white",
                                }}
                            >
                                <div className="bg-[#302B35] text-white overflow-scroll h-full p-4 grow rounded text-xs max-h-[70vh]"
                                    style={{ fontFamily: '"Cascadia Code", sans-serif', }}
                                    dangerouslySetInnerHTML={{ __html: data.textToShow }}
                                />
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </div>
            {/*
            <div className="bg-[#302B35] text-white overflow-scroll h-full p-4 grow rounded text-xs"
                style={{ fontFamily: '"Cascadia Code", sans-serif', }}
                dangerouslySetInnerHTML={{ __html: text }}
            />
            <div className="w-[28rem] my-4 h-[1px] bg-[#B2AEB6]" />
            <div className="mb-6 flex">
                <div className="grow">
                    <FormGroup>
                        <FormControlLabel
                            checked={showUnknown}
                            sx={{
                                margin: 0,
                                "& .MuiCheckbox-root": {
                                    padding: 0,
                                    paddingRight: "0.25rem",
                                },
                                "& .MuiTypography-body1": {
                                    fontSize: "0.875rem"
                                }
                            }} onChange={(e, checked) => handleShowUnknownChange(checked)} control={<Checkbox />} label="Show unknown attributes" />
                        <FormControlLabel
                            checked={showUnchanged}
                            sx={{
                                margin: 0,
                                "& .MuiCheckbox-root": {
                                    padding: 0,
                                    paddingRight: "0.25rem",
                                },
                                "& .MuiTypography-body1": {
                                    fontSize: "0.875rem"
                                }
                            }} onChange={(e, checked) => handleShowUnchangedChange(checked)} control={<Checkbox />} label="Show unchanged attributes" />
                    </FormGroup>
                </div>
                {resourceId &&
                    <div className="w-[45%] flex text-right">
                        <div className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">{"AWS ID: " + resourceId}</div>
                        <Tooltip title={justCopied ? "Copied!" : "Copy AWS ID"}
                            onClose={() => setTimeout(() => setJustCopied(false), 500)}
                            placement="top">
                            <IconButton
                                sx={{
                                    width: "25px",
                                    height: "25px",
                                }}
                                size="small"
                                onClick={() => {
                                    setJustCopied(true);
                                    navigator.clipboard.writeText(resourceId);
                                }}
                            >
                                <ContentCopyIcon sx={{
                                    width: "18px",
                                    height: "18px"
                                }} />
                            </IconButton>
                        </Tooltip>
                    </div>
                }
            </div>
            */}
        </ >
    )
}

export default ModuleDrilldown;